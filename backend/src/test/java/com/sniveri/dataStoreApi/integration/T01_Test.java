package com.sniveri.dataStoreApi.integration;

import com.sniveri.dataStoreApi.dto.mapping.PlaceMapper;
import com.sniveri.dataStoreApi.entities.PlaceEntity;
import com.sniveri.dataStoreApi.repositories.PlaceRepository;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MvcResult;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@Slf4j
public class T01_Test extends IntegrationTest {

    @Autowired
    private PlaceRepository repository;

    @Test
    public void text001() throws Exception{
        /*
        MvcResult result = this.mvc.perform(get("/api/"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.status").value("OK"))
            .andReturn();*/
        PlaceEntity placeEntity = repository.findById(1l).get();
        System.out.println(placeEntity.getAddress().getStreet());
    }
}
