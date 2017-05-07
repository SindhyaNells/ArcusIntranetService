package com.arcus.intranet.domain;

import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClient;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.arcus.intranet.ApiConstants;
import com.arcus.intranet.model.HelpDesk;

import java.util.List;

/**
 * Created by sindhya on 4/17/17.
 */
public class HelpDeskDAO {

    List<HelpDesk> helpDeskMessageList;
    static BasicAWSCredentials credentials = new BasicAWSCredentials(ApiConstants.ACCESS_KEY, ApiConstants.SECRET_KEY);
    static AmazonDynamoDBClient client = new AmazonDynamoDBClient(credentials).withRegion(Regions.US_WEST_2);

    public HelpDesk createMessage(String message){
        HelpDesk newHelpDeskMessage=new HelpDesk();

        DynamoDBMapper mapper=new DynamoDBMapper(client);

        DynamoDBScanExpression scanExpression = new DynamoDBScanExpression();
        helpDeskMessageList = mapper.scan(HelpDesk.class, scanExpression);
        int id=helpDeskMessageList.size()+1;

        newHelpDeskMessage.setMsgId(id);
        newHelpDeskMessage.setMessage(message);
        newHelpDeskMessage.setMsgStatus("new");

        mapper.save(newHelpDeskMessage);

        return newHelpDeskMessage;
    }

}
