package com;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.entity.Movies;
import com.service.MoviesService;

import jakarta.annotation.PostConstruct;

@SpringBootApplication(scanBasePackages = "com")
@EntityScan(basePackages = "com.entity")
@EnableJpaRepositories(basePackages = "com.repository")
@EnableDiscoveryClient
public class MoviesMicroServiceAppApplication {
	
	
	@Autowired
	MoviesService moviesService;
	
	@PostConstruct
	public void init() {
		long count= moviesService.getMoviesCount();
		if(count==0) {
	List<Movies> listOfMovies= Arrays.asList(
			new Movies(1, "Fellowship of the Ring", "German", 45, 4),
			new Movies(2, "Moulin Rouge!", "French", 24, 2),
			new Movies(3, "The Crow", "English", 10, 1)
			);
	moviesService.storeRecord(listOfMovies);
	System.out.println("Movie record stored..");
		}else {
			System.out.println("Record already present");
		}
	}

	public static void main(String[] args) {
		SpringApplication.run(MoviesMicroServiceAppApplication.class, args);
	}

}
