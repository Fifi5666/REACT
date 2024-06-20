package com.aloha.server.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aloha.server.dto.Board;
import com.aloha.server.dto.Files;
import com.aloha.server.service.BoardService;
import com.aloha.server.service.FileService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/boards")
public class BoardController {
    
    @Autowired
    private BoardService boardService;

    @Autowired
    private FileService fileService;

    @GetMapping()
    public ResponseEntity<?> getAll() {
        log.info("게시글 목록");
        try {
            List<Board> boardList = boardService.list();
            return new ResponseEntity<>(boardList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/{no}")
    public ResponseEntity<?> getOne(@PathVariable("no") int no) {
        try {
            // 게시글
            Board board = boardService.select(no);
            // 파일 목록
            Files file = new Files();
            file.setParentTable("board");
            file.setParentNo(no);
            List<Files> fileList = fileService.listByParent(file);
            log.info("fileList : " + fileList);

            Map<String, Object> response = new HashMap<>();
            response.put("board", board);
            response.put("fileList", fileList);

            return new ResponseEntity<>(response, HttpStatus.OK);
            // board 대신 response를 넣어주면 둘 다 응답을 하게 되는 것
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PostMapping()
    // @Requestbody - Content-Type : application/json -> RequestBody
    // 안 붙였을 때  - Content-Type : mutipart/form-data
    // 그래서 썬더클라이언트 파일 테스트 할 때 리퀘스트바디 지움
    // public ResponseEntity<?> create(@RequestBody Board board) {
    public ResponseEntity<?> create(Board board) {
        try {
            Board newBoard = boardService.insert(board);
            if(newBoard != null)
                return new ResponseEntity<>(newBoard, HttpStatus.OK);
            else
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PutMapping()
    // public ResponseEntity<?> update(@RequestBody Board board) {
    public ResponseEntity<?> update(Board board) {
        try {
            int result = boardService.update(board);
            if(result > 0)
                return new ResponseEntity<>("Update Result", HttpStatus.OK);
            else
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @DeleteMapping("/{no}")
    public ResponseEntity<?> destroy(@PathVariable("no") int no) {
        try {
            int result = boardService.delete(no);
            if(result > 0)
                return new ResponseEntity<>("Delete Result", HttpStatus.OK);
            else
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
