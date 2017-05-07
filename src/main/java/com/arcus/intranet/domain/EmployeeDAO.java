package com.arcus.intranet.domain;

import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClient;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.arcus.intranet.ApiConstants;
import com.arcus.intranet.model.Employee;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by sindhya on 4/15/17.
 */
public class EmployeeDAO {

    private List<Employee> employeeResult=new ArrayList<>();
    static BasicAWSCredentials credentials = new BasicAWSCredentials(ApiConstants.ACCESS_KEY, ApiConstants.SECRET_KEY);
    static AmazonDynamoDBClient client = new AmazonDynamoDBClient(credentials).withRegion(Regions.US_WEST_2);


    public List<Employee> getEmployeeList(Integer employee_number){
        DynamoDBMapper mapper = new DynamoDBMapper(client);

        if(employee_number==0) {
            DynamoDBScanExpression scanExpression = new DynamoDBScanExpression();
            employeeResult = mapper.scan(Employee.class, scanExpression);

        }else{

            Map<String, AttributeValue> filterMap = new HashMap<>();
            filterMap.put(":val1", new AttributeValue().withN(String.valueOf(employee_number)));
            DynamoDBScanExpression scanExpression=new DynamoDBScanExpression().withFilterExpression("employee_number=:val1").withExpressionAttributeValues(filterMap);
            employeeResult=mapper.scan(Employee.class, scanExpression);

        }

        return employeeResult;
    }


}
