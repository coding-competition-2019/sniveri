package com.sniveri.dataStoreApi.dto.mapping;

import com.sniveri.dataStoreApi.dto.PlaceDTO;
import com.sniveri.dataStoreApi.entities.PlaceEntity;
import org.mapstruct.Mapper;

@Mapper
public interface PlaceMapper {
    PlaceEntity fromDTO(PlaceDTO placeDTO);
    PlaceDTO toDTO(PlaceEntity placeEntity);
}
