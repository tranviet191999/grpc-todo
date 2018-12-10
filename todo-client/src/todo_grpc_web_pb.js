/**
 * @fileoverview gRPC-Web generated client stub for todo
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.todo = require('./todo_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.todo.todoServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.todo.todoServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.todo.todoServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.todo.todoServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.addTodoParams,
 *   !proto.todo.todoObject>}
 */
const methodInfo_addTodo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.todoObject,
  /** @param {!proto.todo.addTodoParams} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.todoObject.deserializeBinary
);


/**
 * @param {!proto.todo.addTodoParams} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.todoObject)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.todoObject>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.todoServiceClient.prototype.addTodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.todoService/addTodo',
      request,
      metadata,
      methodInfo_addTodo,
      callback);
};


/**
 * @param {!proto.todo.addTodoParams} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.todoObject>}
 *     The XHR Node Readable Stream
 */
proto.todo.todoServicePromiseClient.prototype.addTodo =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.addTodo(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.deleteTodoParams,
 *   !proto.todo.deleteResponse>}
 */
const methodInfo_deleteTodo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.deleteResponse,
  /** @param {!proto.todo.deleteTodoParams} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.deleteResponse.deserializeBinary
);


/**
 * @param {!proto.todo.deleteTodoParams} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.deleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.deleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.todoServiceClient.prototype.deleteTodo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.todoService/deleteTodo',
      request,
      metadata,
      methodInfo_deleteTodo,
      callback);
};


/**
 * @param {!proto.todo.deleteTodoParams} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.deleteResponse>}
 *     The XHR Node Readable Stream
 */
proto.todo.todoServicePromiseClient.prototype.deleteTodo =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.deleteTodo(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.todo.getTodoParams,
 *   !proto.todo.todoResponse>}
 */
const methodInfo_getTodos = new grpc.web.AbstractClientBase.MethodInfo(
  proto.todo.todoResponse,
  /** @param {!proto.todo.getTodoParams} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.todo.todoResponse.deserializeBinary
);


/**
 * @param {!proto.todo.getTodoParams} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.todo.todoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.todo.todoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.todo.todoServiceClient.prototype.getTodos =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/todo.todoService/getTodos',
      request,
      metadata,
      methodInfo_getTodos,
      callback);
};


/**
 * @param {!proto.todo.getTodoParams} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.todo.todoResponse>}
 *     The XHR Node Readable Stream
 */
proto.todo.todoServicePromiseClient.prototype.getTodos =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getTodos(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.todo;

