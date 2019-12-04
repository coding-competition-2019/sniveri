package com.hacka.data.controller;

import com.hacka.data.dto.StatusDTO;
import com.hacka.data.entity.PlaceEntity;
import com.hacka.data.repository.PlaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

@RestController
@RequestMapping("/service")
public class TestController {

    @Autowired
    private PlaceRepository repository;

    @GetMapping("/healthCheck")
    public StatusDTO healthCheck(){
        return new StatusDTO("OK");
    }

    @GetMapping("/get/{id}")
    public @ResponseBody PlaceEntity getObject(@PathVariable("id") Long id){
        return repository.findById(id).get();
    }

    @PostMapping("/add")
    public StatusDTO addObject(@NotNull @Valid @RequestBody PlaceEntity placeEntity){
        PlaceEntity saved = repository.save(placeEntity);
        if(saved.getName() == placeEntity.getName()){
            return new StatusDTO("OK");
        } else {
            return new StatusDTO("NOK");
        }
    }
}
