package com.sniveri.dataStoreApi.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PlaceDTO {
    private String name;
    private String url;
    private AddressDTO address;
    private ActivityDTO[] activities;
}
