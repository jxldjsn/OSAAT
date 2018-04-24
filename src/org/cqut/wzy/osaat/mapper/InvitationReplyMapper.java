package org.cqut.wzy.osaat.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.cqut.wzy.osaat.entity.InvitationReply;
import org.cqut.wzy.osaat.entity.InvitationReplyExample;

public interface InvitationReplyMapper {
    int countByExample(InvitationReplyExample example);

    int deleteByExample(InvitationReplyExample example);

    int deleteByPrimaryKey(Long replyId);

    int insert(InvitationReply record);

    int insertSelective(InvitationReply record);

    List<InvitationReply> selectByExampleWithBLOBs(InvitationReplyExample example);

    List<InvitationReply> selectByExample(InvitationReplyExample example);

    InvitationReply selectByPrimaryKey(Long replyId);

    int updateByExampleSelective(@Param("record") InvitationReply record, @Param("example") InvitationReplyExample example);

    int updateByExampleWithBLOBs(@Param("record") InvitationReply record, @Param("example") InvitationReplyExample example);

    int updateByExample(@Param("record") InvitationReply record, @Param("example") InvitationReplyExample example);

    int updateByPrimaryKeySelective(InvitationReply record);

    int updateByPrimaryKeyWithBLOBs(InvitationReply record);

    int updateByPrimaryKey(InvitationReply record);
}