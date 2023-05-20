var PostStatus;
(function (PostStatus) {
    PostStatus[PostStatus["NULL"] = 0] = "NULL";
    PostStatus[PostStatus["OPEN"] = 1] = "OPEN";
    PostStatus[PostStatus["CLOSE"] = 2] = "CLOSE";
    PostStatus[PostStatus["UPCOMING"] = 3] = "UPCOMING";
})(PostStatus || (PostStatus = {}));

export { PostStatus };
