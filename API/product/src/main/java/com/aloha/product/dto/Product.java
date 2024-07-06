package com.aloha.product.dto;

import java.util.Date;

import lombok.Data;

@Data
public class Product {
    int no;
    String id;
    String name;
    int price;
    String img;
    Date createAt;
    Date updateAt;
}
