package com.controller;

public class ResponseHandler {

  public static Response<Object> ok(Object data) {
    return new Response<Object>(200, "ok", data);
  }

  public static Response<Object> error(Object data) {
    return new Response<Object>(500, "internal-server-error", data);
  }

  public static Response<Object> unAuthorized(Object data) {
    return new Response<Object>(404, "unauthorized-error", data);
  }

  public static Response<Object> overlapedUsername(Object data) {
    return new Response<Object>(1001, "overlaped-username", data);
  }

  public static Response<Object> overlapedEmail(Object data) {
    return new Response<Object>(1001, "overlaped-email", data);
  }
}
