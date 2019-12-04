package com.sniveri.dataStoreApi.repositories;

import com.sniveri.dataStoreApi.entities.PlaceEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public abstract class PlaceRepository implements JpaRepository<PlaceEntity, Long> {

}
