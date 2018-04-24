package org.cqut.wzy.osaat.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.cqut.wzy.osaat.entity.Invitation;
import org.cqut.wzy.osaat.entity.InvitationExample;

public interface InvitationMapper {
    int countByExample(InvitationExample example);

    int deleteByExample(InvitationExample example);

    int deleteByPrimaryKey(Long invitationId);

    int insert(Invitation record);

    int insertSelective(Invitation record);

    List<Invitation> selectByExampleWithBLOBs(InvitationExample example);

    List<Invitation> selectByExample(InvitationExample example);

    Invitation selectByPrimaryKey(Long invitationId);

    int updateByExampleSelective(@Param("record") Invitation record, @Param("example") InvitationExample example);

    int updateByExampleWithBLOBs(@Param("record") Invitation record, @Param("example") InvitationExample example);

    int updateByExample(@Param("record") Invitation record, @Param("example") InvitationExample example);

    int updateByPrimaryKeySelective(Invitation record);

    int updateByPrimaryKeyWithBLOBs(Invitation record);

    int updateByPrimaryKey(Invitation record);
}