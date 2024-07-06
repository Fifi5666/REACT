package com.aloha.todo.dto;

import java.util.Date;

import lombok.Data;

@Data
public class Todo {
    int no;
    String name;
    int status;
    Date regDate;
    Date updDate;
}
