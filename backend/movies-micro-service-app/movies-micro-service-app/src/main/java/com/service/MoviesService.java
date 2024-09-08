package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Movies;
import com.repository.MoviesRepository;

@Service
public class MoviesService {

	@Autowired
	MoviesRepository moviesRepository;
	
	public List<Movies> findAllMovies() {
		return moviesRepository.findAll();
	}
	
	public String storeRecord(List<Movies> listOfMovies) {
		moviesRepository.saveAll(listOfMovies);
		return "Record stored";
	}
	
	public long getMoviesCount() {
		return moviesRepository.count();
	}
	
	public String addMovie(Movies movies) {
		Optional<Movies> result = moviesRepository.findById(movies.getMid());
		if(result.isPresent()) {
			return "Movie already present with id as "+movies.getMid();
		}else {
			moviesRepository.save(movies);
			return "Movies record stored successfully";
		}
	}
}
