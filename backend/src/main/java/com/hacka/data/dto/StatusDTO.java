package com.hacka.data.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class StatusDTO {

	public StatusDTO(String status){
		this.status = status;
		this.time = Long.valueOf(Instant.now().getEpochSecond());
	}

	private String status;
	private Long time;
}
