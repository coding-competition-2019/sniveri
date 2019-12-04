package com.sniveri.dataStoreApi.entities;

import com.sniveri.dataStoreApi.dto.AddressDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
@Entity(name = "places")
public class PlaceEntity {

    @Id
    @SequenceGenerator(name = "place_seq", sequenceName = "place_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "place_seq")
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "url")
    private String url;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "address_id")
    private AddressEntity address;

    @ManyToMany(fetch = FetchType.EAGER, cascade= CascadeType.PERSIST)
    @JoinTable(
        name = "place_activity",
        joinColumns = @JoinColumn(name = "place_id"),
        inverseJoinColumns = @JoinColumn(name = "activity_id"))
    private Set<ActivityEntity> activities;
}
