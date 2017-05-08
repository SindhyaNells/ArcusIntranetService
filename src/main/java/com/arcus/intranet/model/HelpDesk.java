package com.arcus.intranet.model;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;

/**
 * Created by sindhya on 4/17/17.
 */
@DynamoDBTable(tableName = "help_desk")
public class HelpDesk {

    private int msg_id;
    private String message;
    private String msgStatus;

    @DynamoDBHashKey(attributeName = "msg_id")
    public int getMsgId() {
        return msg_id;
    }

    public void setMsgId(int msgId) {
        this.msg_id = msgId;
    }

    @DynamoDBAttribute(attributeName = "message")
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @DynamoDBAttribute(attributeName = "status")
    public String getMsgStatus() {
        return msgStatus;
    }

    public void setMsgStatus(String msgStatus) {
        this.msgStatus = msgStatus;
    }
}
