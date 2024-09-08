package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Movies;
import com.service.MoviesService;

@RestController
@RequestMapping("movies")
@CrossOrigin
public class MoviesController {

	@Autowired
	MoviesService moviesService;
	
	@GetMapping(value = "find",produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Movies> findAllMovies() {
		return moviesService.findAllMovies();
	}
	
	@PostMapping(value = "store",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String storeMovies(@RequestBody Movies movies) {
		return moviesService.addMovie(movies);
	}
}
