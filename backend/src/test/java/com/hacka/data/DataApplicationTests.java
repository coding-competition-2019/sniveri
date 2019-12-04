package com.hacka.data;

import com.hacka.data.entity.PlaceEntity;
import com.hacka.data.repository.PlaceRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class DataApplicationTests {

	@Autowired
	PlaceRepository placeRepository;

	@Test
	void contextLoads() {
		PlaceEntity placeEntity =placeRepository.findById(1l).get();
		System.out.println("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"+placeEntity.getAddress());
	}

}
