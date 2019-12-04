package com.sniveri.dataStoreApi.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Entity(name = "activities")
public class ActivityEntity {

    @Id
    @SequenceGenerator(name = "activity_seq", sequenceName = "activity_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "activity_seq")
    @Column(name = "id", updatable = false)
    private Long id;

    @NotNull
    @Column(name = "activity")
    private String activity;

    @ManyToMany(mappedBy = "activities")
    private Set<PlaceEntity> place;
}
