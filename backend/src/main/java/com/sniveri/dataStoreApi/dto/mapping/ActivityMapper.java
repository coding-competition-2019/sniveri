package com.sniveri.dataStoreApi.dto.mapping;

import com.sniveri.dataStoreApi.dto.ActivityDTO;
import com.sniveri.dataStoreApi.entities.ActivityEntity;
import org.mapstruct.Mapper;

@Mapper
public interface ActivityMapper {
    ActivityEntity fromDTO(ActivityDTO activityDTO);
    ActivityDTO toDTO(ActivityEntity activityEntity);
}
