package com.sniveri.dataStoreApi.integration;

import com.sniveri.dataStoreApi.dto.PlaceDTO;
import com.sniveri.dataStoreApi.dto.mapping.PlaceMapper;
import com.sniveri.dataStoreApi.entities.PlaceEntity;
import com.sniveri.dataStoreApi.repositories.PlaceRepository;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

@Slf4j
public class T01_Test extends IntegrationTest {

    @Autowired
    private PlaceRepository repository;

    @Autowired
    private PlaceMapper placeMapper;

    @Test
    public void text001() throws Exception{

        PlaceEntity placeEntity = repository.findById(1l).get();
        PlaceDTO placeDTO = placeMapper.toDTO(placeEntity);
        printAsJSON(placeEntity);
        printAsJSON(placeDTO);
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
