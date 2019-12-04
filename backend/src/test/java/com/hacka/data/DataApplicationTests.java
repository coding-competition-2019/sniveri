package com.hacka.data;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.code.geocoder.AdvancedGeoCoder;
import com.google.code.geocoder.GeoAddressService;
import com.google.code.geocoder.Geocoder;
import com.google.code.geocoder.model.GeocodeResponse;
import com.google.code.geocoder.model.GeocoderRequest;
import com.google.code.geocoder.model.LatLng;
import com.hacka.data.entity.PlaceEntity;
import com.hacka.data.repository.PlaceRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JacksonJsonParser;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.File;
import java.util.List;

@SpringBootTest
class DataApplicationTests {

	@Autowired
	PlaceRepository placeRepository;

	@Autowired
	ObjectMapper objectMapper;

	@Test
	void contextLoads() throws Exception{



		/*
		String filename = "src/main/resources/updated_places.json";
		File file = new File(filename);

		JsonNode jsonNode = objectMapper.readTree(file);
		jsonNode.get("places").elements().forEachRemaining(jsonNode1 -> {
			PlaceEntity placeEntity = new PlaceEntity();
			placeEntity.setName(jsonNode1.get("name").asText());
			placeEntity.setUrl(jsonNode1.get("url").asText());
			placeEntity.setLatitude(jsonNode1.get("lat").asDouble());
			placeEntity.setLongitude(jsonNode1.get("lng").asDouble());
			final String[] address = {""};
			jsonNode1.get("address").elements().forEachRemaining(jsonNode2 -> {
				address[0] +=jsonNode2.asText()+",";
			});
			if(address[0].length() > 2)
				address[0].substring(0, address[0].length()-1);
			placeEntity.setAddress(address[0]);
			final String[] activities = {""};
			jsonNode1.get("activities").elements().forEachRemaining(jsonNode2 -> {
				activities[0] +=jsonNode2.asText()+",";
			});
			if(activities[0].length() > 2)
				activities[0].substring(0, activities[0].length()-1);
			placeEntity.setActivities(activities[0]);

			System.out.println(placeRepository.save(placeEntity).getId());
		});*/
	}

	void printAsJSON(Object object) {
		try {
			System.out.println(objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(object));
		} catch (Exception e) {
			System.out.println("Error printing object as JSON!");
			e.printStackTrace();
		}
	}

}
