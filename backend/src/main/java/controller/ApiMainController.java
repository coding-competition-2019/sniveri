package controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ApiMainController {

    @GetMapping("/healthCheck")
    public @ResponseBody String healthCheck(){
        return "OK";
    }

    @PostMapping(path = "/test")
    public @ResponseBody String healthCheckPOst(){
        return "OK";
    }
}
