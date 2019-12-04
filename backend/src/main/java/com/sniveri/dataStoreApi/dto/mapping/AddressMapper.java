package com.sniveri.dataStoreApi.dto.mapping;

import com.sniveri.dataStoreApi.dto.AddressDTO;
import com.sniveri.dataStoreApi.entities.AddressEntity;
import org.mapstruct.Mapper;

@Mapper
public interface AddressMapper {
    AddressEntity fromDTO(AddressDTO addressDTO);
    AddressDTO toDTO(AddressEntity addressEntity);
}
