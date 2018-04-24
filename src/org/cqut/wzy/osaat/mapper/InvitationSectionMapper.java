package org.cqut.wzy.osaat.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.cqut.wzy.osaat.entity.InvitationSection;
import org.cqut.wzy.osaat.entity.InvitationSectionExample;

public interface InvitationSectionMapper {
    int countByExample(InvitationSectionExample example);

    int deleteByExample(InvitationSectionExample example);

    int deleteByPrimaryKey(Integer sectionId);

    int insert(InvitationSection record);

    int insertSelective(InvitationSection record);

    List<InvitationSection> selectByExample(InvitationSectionExample example);

    InvitationSection selectByPrimaryKey(Integer sectionId);

    int updateByExampleSelective(@Param("record") InvitationSection record, @Param("example") InvitationSectionExample example);

    int updateByExample(@Param("record") InvitationSection record, @Param("example") InvitationSectionExample example);

    int updateByPrimaryKeySelective(InvitationSection record);

    int updateByPrimaryKey(InvitationSection record);
}