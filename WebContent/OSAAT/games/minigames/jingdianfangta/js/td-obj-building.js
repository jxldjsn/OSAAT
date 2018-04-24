/**
*
* Author:
*	oldj <oldj.wu@gmail.com>
*	http://oldj.net/
*
* File: td-obj-building.js
* @save-up: [td.js, ../td.html]
*
* Create Date: 2010-11-20 12:30:53
* Last Update: 2010-11-22 15:18:04
*
*/


// _TD.a.push begin
_TD.a.push(function (TD) {

// building 对象的属性、方法。注意属性中不要有数组、对象等
// 引用属性，否则多个实例的相关属性会发生冲突
var building_obj = {
	_init: function (cfg) {
		this.is_selected = false;
		this.level = 0;
		this.killed = 0; // 当前建筑杀死了多少怪物
		this.target = null;

		cfg = cfg || {};
		this.map = cfg.map || null;
		this.grid = cfg.grid || null;
		/**
		 * 子弹类型，可以有以下类型：
		 * 		1：普通子弹
		 * 		2：激光类，发射后马上命中
		 * 		3：导弹类，击中后会爆炸，带来面攻击
		 */
		this.bullet_type = cfg.bullet_type || 1;
		this.type = cfg.type; /**
		* type 可能的值有：
		* 		"wall": 墙壁，没有攻击性
		* 		"cannon": 炮台
		* 		"LMG": 轻机枪
		* 		"HMG": 重机枪
		* 		"laser_gun": 激光枪
		*
		*/
		this.speed = cfg.speed;
		this.bullet_speed = cfg.bullet_speed;
		this.is_pre_building = !!cfg.is_pre_building;
		this.blink = this.is_pre_building;
		this.wait_blink = this._default_wait_blink = 20;
		this.is_weapon = (this.type != "wall"); // 墙等不可攻击的建筑此项为 false ，其余武器此项为 true
		var o = TD.getDefaultBuildingAttributes(this.type);
		TD.lang.mix(this, o);
		this.range_px = this.range * TD.grid_size;
		this.money = this.cost; // 购买、升级本建筑已花费的钱

		this.caculatePos();
	},
	getUpgradeCost: function () {
		return Math.floor(this.money * 0.75);
	},
	getSellMoney: function () {
		return Math.floor(this.money * 0.5) || 1;
	},
	toggleSelected: function () {
		this.is_selected = !this.is_selected;
		this.grid.hightLight(this.is_selected);
		var _this = this;
		if (this.is_selected) {
			this.map.eachBuilding(function () {
				if (this != _this)
					this.is_selected = false;
			});
			(this.map.is_main_map ? this.scene.panel_map : this.scene.map).eachBuilding(function () {
				this.is_selected = false;
				this.grid.hightLight(false);
			});
			this.map.selected_building = this;

			if (!this.map.is_main_map) {
				// 在面版地图中选中了建筑，进入建筑模式
				this.scene.map.preBuild(this.type);
			} else {
				// 取消建筑模式
				this.scene.map.cancelPreBuild();
			}
		} else {
			if (this.map.selected_building == this)
				this.map.selected_building = null;

			if (!this.map.is_main_map) {
				// 取消建筑模式
				this.scene.map.cancelPreBuild();
			}
		}

		if (this.map.is_main_map) {
			if (this.map.selected_building) {
				this.scene.panel.btn_upgrade.show();
				this.scene.panel.btn_sell.show();
				this.updateBtnDesc();
			} else {
				this.scene.panel.btn_upgrade.hide();
				this.scene.panel.btn_sell.hide();
			}
		}
	},
	updateBtnDesc: function () {
		this.scene.panel.btn_upgrade.desc = TD._t(
			"upgrade", [
			TD._t("building_name_" + this.type),
			this.level + 1,
			this.getUpgradeCost()
		]);
		this.scene.panel.btn_sell.desc = TD._t(
			"sell", [
			TD._t("building_name_" + this.type),
			this.getSellMoney()
		]);
	},
	locate: function (grid) {
		this.grid = grid;
		this.map = grid.map;
		this.cx = this.grid.cx;
		this.cy = this.grid.cy;
		this.x = this.grid.x;
		this.y = this.grid.y;
		this.x2 = this.grid.x2;
		this.y2 = this.grid.y2;
		this.width = this.grid.width;
		this.height = this.grid.height;

		this.px = this.x + 0.5;
		this.py = this.y + 0.5;

		this.wait_blink = this._default_wait_blink;
		this._fire_wait = Math.floor(Math.max(2 / (this.speed * TD.global_speed), 1));
		this._fire_wait2 = this._fire_wait;

	},
	/**
	 * 将本建筑彻底删除
	 * TODO: 本函数还需要检查
	 */
	remove: function () {
		if (this.grid) this.grid.building = null;
		this.hide();
		this.del();
	},
	findTaget: function () {
		if (!this.is_weapon || this.is_pre_building || !this.grid) return;

		var cx = this.cx, cy = this.cy,
			range2 = Math.pow(this.range_px, 2);

		if (this.target && this.target.is_valid) {
			// 检查当前目标是否仍在视野范围内
			if (Math.pow(this.target.cx - cx, 2) + Math.pow(this.target.cy - cy, 2) <= range2)
				return;
		}

		this.target = this.map.anyMonster(function () {
			return Math.pow(this.cx - cx, 2) + Math.pow(this.cy - cy, 2) <= range2;
		});
	},
	getTargetPosition: function () {
		if (!this.target) {
			// 以 entrance 为目标
			var grid = this.map.is_main_map ? this.map.entrance : this.grid;
			return [grid.cx, grid.cy];
		}
		return [this.target.cx, this.target.cy];
	},
	fire: function () {
		var muzzle = this.muzzle || [this.cx, this.cy],
			cx = muzzle[0],
			cy = muzzle[1];

			new TD.Bullet(null, {
				building: this,
				damage: this.damage,
				target: this.target,
				speed: this.bullet_speed,
				x: cx,
				y: cy
			});
	},
	tryToFire: function () {
		if (!this.is_weapon || !this.target) return;
		this._fire_wait --;
		if (this._fire_wait > 0) {
			return;
		} else if (this._fire_wait < 0) {
			this._fire_wait = this._fire_wait2;
		} else {
			this.fire();
		}
	},
	_upgrade2: function (k) {
		if (!this._upgrade_records[k])
			this._upgrade_records[k] = this[k];
		var v = this._upgrade_records[k],
			mk = "max_" + k,
			uk = "_update_rule_" + k,
			uf = this[uk] || TD.default_upgrade_rule;
		if (!v || isNaN(v)) return;

		v = uf(this.level, v);
		if (this[mk] && !isNaN(this[mk]) && this[mk] < v)
			v = this[mk];
		this._upgrade_records[k] = v;
		this[k] = Math.floor(v);
	},
	upgrade: function () {
		if (!this._upgrade_records)
			this._upgrade_records = {};

		var attrs = [
			// 可升级的变量
			"damage", "range", "speed", "life", "shield"
		], i;
		for (i = 0; i < attrs.length; i ++)
			this._upgrade2(attrs[i]);
		this.level ++;
		this.range_px = this.range * TD.grid_size;
	},
	tryToUpgrade: function (btn) {
		var cost = this.getUpgradeCost(),
			msg = "";
		if (cost > TD.money) {
			msg = TD._t("not_enough_money", [cost]);
		} else {
			TD.money -= cost;
			this.money += cost;
			this.upgrade();
			msg = TD._t("upgrade_success", [
				TD._t("building_name_" + this.type), this.level,
				this.getUpgradeCost()
			]);
		}

		this.updateBtnDesc();
		this.scene.panel.balloontip.msg(msg, btn);
	},
	tryToSell: function (btn) {
		if (!this.is_valid) return;

		TD.money += this.getSellMoney();
		this.is_valid = false;
		this.grid.removeBuilding();
		this.map.selected_building = null;
		this.map.select_hl.hide();
		this.map.checkHasWeapon();
		this.scene.panel.btn_upgrade.hide();
		this.scene.panel.btn_sell.hide();
		this.scene.panel.balloontip.hide();
	},
	step: function () {
		if (this.blink) {
			this.wait_blink --;
			if (this.wait_blink < -this._default_wait_blink)
				this.wait_blink = this._default_wait_blink;
		}

		this.findTaget();
		this.tryToFire();
	},
	render: function () {
		if (!this.is_visiable || this.wait_blink < 0) return;

		var ctx = TD.ctx,
			px = this.x + 0.5,
			py = this.y + 0.5;

		TD.renderBuilding(this);

		if (this.map.is_main_map && (this.is_selected || (this.is_pre_building) || this.map.show_all_ranges) && this.is_weapon && this.range > 0 && this.grid) {
			// 画射程
			ctx.lineWidth = 1;
			ctx.fillStyle = "rgba(200, 200, 200, 0.15)";
			ctx.strokeStyle = "#999";
			ctx.beginPath();
			ctx.arc(this.cx, this.cy, this.range_px, 0, Math.PI * 2, true);
			ctx.closePath();
			ctx.fill();
			ctx.stroke();
		}
	},
	onEnter: function () {
		if (this.is_pre_building) return;

		var msg = "建筑工事";
		if (this.map.is_main_map) {
			msg = TD._t("building_info" + (this.type == "wall" ? "_wall" : ""), [TD._t("building_name_" + this.type), this.level, this.damage, this.speed, this.range, this.killed]);
		} else {
			msg = TD._t("building_intro_" + this.type, [TD.getDefaultBuildingAttributes(this.type).cost]);
		}

		this.scene.panel.balloontip.msg(msg, this.grid);
	},
	onOut: function () {
		if (this.scene.panel.balloontip.grid == this.grid) {
			this.scene.panel.balloontip.hide();
		}
	},
	onClick: function () {
		if (this.is_pre_building || this.scene.state != 1) return;
		this.toggleSelected();
	}
};

/**
 * @param cfg <object> 配置对象
 * 		至少需要包含以下项：
 * 		{
 * 			type: 建筑类型，可选的值有
 * 				"wall"
 * 				"cannon"
 * 				"LMG"
 * 				"HMG"
 * 				"laser_gun"
 * 		}
 */
TD.Building = function (id, cfg) {
	cfg.on_events = ["enter", "out", "click"];
	var building = new TD.Element(id, cfg);
	TD.lang.mix(building, building_obj);
	building._init(cfg);

	return building;
}


// bullet 对象的属性、方法。注意属性中不要有数组、对象等
// 引用属性，否则多个实例的相关属性会发生冲突
var bullet_obj = {
	_init: function (cfg) {
		cfg = cfg || {};

		this.speed = cfg.speed;
		this.damage = cfg.damage;
		this.target = cfg.target;
		this.cx = cfg.x;
		this.cy = cfg.y;
		this.r = cfg.r || Math.max(Math.sqrt(this.damage) , 2);
		if (this.r < 1) this.r = 1;
		if (this.r > 6) this.r = 6;

		this.building = cfg.building || null;
		this.map = cfg.map || this.building.map;
		this.type = cfg.type || 1;
		this.color = cfg.color || "#000";

		this.map.bullets.push(this);
		this.addToScene(this.map.scene, 1, 6);

		if (this.type == 1) {
			this.caculate();
		}
	},
	caculate: function () {
		var sx, sy, c,
			tx = this.target.cx,
			ty = this.target.cy,
			speed;
		sx = tx - this.cx;
		sy = ty - this.cy;
		c = Math.sqrt(Math.pow(sx, 2) + Math.pow(sy, 2)),
		speed = 20 * this.speed * TD.global_speed,
		this.vx = sx * speed / c,
		this.vy = sy * speed / c;
	},
	/**
	 * 检查当前子弹是否已超出地图范围
	 */
	checkOutOfMap: function () {
		this.is_valid = !(
			this.cx < this.map.x ||
			this.cx > this.map.x2 ||
			this.cy < this.map.y ||
			this.cy > this.map.y2
		);

		return !this.is_valid;
	},
	/**
	 * 检查当前子弹是否击中了怪物
	 */
	checkHit: function () {
		var _this = this,
			cx = this.cx,
			cy = this.cy,
			r = this.r,
			monster = this.map.anyMonster(function () {
				return Math.pow(this.cx - cx, 2) + Math.pow(this.cy - cy, 2) <= Math.pow(this.r + r, 2) * 2;
			});

		if (monster) {
			monster.beHit(this.building, this.damage);
			this.is_valid = false;
			return true;
		}
		return false;
	},
	step: function () {
		if (this.checkOutOfMap() || this.checkHit()) return;

		this.cx += this.vx;
		this.cy += this.vy;
	},
	render: function () {
		var ctx = TD.ctx;
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.cx, this.cy, this.r, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.fill();
	}
};

/**
 * @param cfg <object> 配置对象
 * 		至少需要包含以下项：
 * 		{
 * 			x: 子弹发出的位置
 * 			y: 子弹发出的位置
 * 			speed:
 * 			damage:
 * 			target: 目标，一个 monster 对象
 * 			building: 所属的建筑
 * 		}
 * 子弹类型，可以有以下类型：
 * 		1：普通子弹
 * 		2：激光类，发射后马上命中
 * 		3：导弹类，击中后会爆炸，带来面攻击
 */
TD.Bullet = function (id, cfg) {
	var bullet = new TD.Element(id, cfg);
	TD.lang.mix(bullet, bullet_obj);
	bullet._init(cfg);

	return bullet;
}

}); // _TD.a.push end

