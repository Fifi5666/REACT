package com.aloha.product.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aloha.product.dto.Product;
import com.aloha.product.mapper.ProductMapper;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductMapper productMapper;

    @Override
    public List<Product> list() throws Exception {
       List<Product> productList = productMapper.list();
       return productList;
    }

    @Override
    public Product select(int no) throws Exception {
        Product product = productMapper.select(no);
        return product;
    }

    @Override
    public int insert(Product product) throws Exception {
        int result = productMapper.insert(product);
        
        return result;
    }

    @Override
    public int update(Product product) throws Exception {
        int result = productMapper.update(product);
        return result;
        
    }

    @Override
    public int delete(int no) throws Exception {
        int result = productMapper.delete(no);
        return result;
    }
    
}
