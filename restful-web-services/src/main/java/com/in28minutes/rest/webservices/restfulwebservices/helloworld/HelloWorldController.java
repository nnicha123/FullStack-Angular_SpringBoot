package com.in28minutes.rest.webservices.restfulwebservices.helloworld;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;


//Controller
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {
	//GET
	//URL -/hello-world
	//method - "Hello World"
	
	@GetMapping(path="/hello-world")
	public String helloWorld() {
		return "Hello World";
	}
	
	//hello-world-bean
	@GetMapping(path="/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		//throw new RuntimeException("Some Error has Happened! Contact Support at ***-***");
		return new HelloWorldBean("Hello Bean 1234");
	}
	
	@GetMapping(path="/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello World, %s", name));
		
	}

}
