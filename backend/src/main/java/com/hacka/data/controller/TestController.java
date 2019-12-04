package com.hacka.data.controller;

import com.hacka.data.dto.StatusDTO;
import com.hacka.data.entity.PlaceEntity;
import com.hacka.data.repository.PlaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
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
        System.out.println("hledám id "+id
        );
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

    @GetMapping("/getAll")
    public @ResponseBody List<PlaceEntity> getAll(){
        return repository.findAll();
    }

    @GetMapping("/getAllByLoc")
    public @ResponseBody List<PlaceEntity> getAllByLoc(@RequestParam("longitude") Double longitude, @RequestParam("latitude") Double latitude, @RequestParam("distance") Double distance, @RequestParam(required = false) String[] activities){
        List<PlaceEntity> awal =  repository.findAll();
        List<PlaceEntity> vysl = new ArrayList<>();
        for (PlaceEntity entity: awal) {
            if(entity.getLatitude()!=null&& entity.getLongitude()!=null) {
                if (distanceOfTwoPlacesInKm(entity.getLatitude(), entity.getLongitude(), latitude, longitude) <= distance) {
                    entity.setDistance(distanceOfTwoPlacesInKm(entity.getLatitude(), entity.getLongitude(), latitude, longitude));
                    if (activities != null && activities.length != 0) {
                        if (entity.getActivities() != null && entity.getActivities() != "") {
                            String[] act = entity.getActivities().split(",");
                            boolean is = false;
                            if (act != null && act.length != 0) {
                                for (int i = 0; i < act.length; i++) {
                                    for (int j = 0; j < activities.length; i++) {
                                        if (act[i] == activities[j]) {
                                            is = true;
                                        }
                                    }
                                }
                                if (is) {
                                    vysl.add(entity);
                                }
                            }
                        }
                    } else {
                        vysl.add(entity);
                    }
                }
            }
        }
        return vysl;
    }

    public double distanceOfTwoPlacesInKm(double lat1, double lng1, double lat2, double lng2){
        double theta = lng1 - lng2;
        double dist = Math.sin(deg2rad(lat1)) * Math.sin(deg2rad(lat2)) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.cos(deg2rad(theta));
        dist = Math.acos(dist);
        dist = rad2deg(dist);
        dist = dist * 60 * 1.1515;
        dist = dist * 1.609344;
        return dist;
    }
    private double deg2rad(double deg) {
        return (deg * Math.PI / 180.0);
    }
    private double rad2deg(double rad) {
        return (rad * 180.0 / Math.PI);
    }
}
