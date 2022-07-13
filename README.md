1) GET BASE_URL/help
2) GET BASE_URL/:organization/:repository/issues?filter=created&sort=created
3) GET BASE_URL/:organization/:repository/issues/:number
4) POST BASE_URL/:organization/:repository/issues

headers - headers: {
  Authorization: string
}

body - {
  "title": "title",
  "body": "body"
}

5) PATCH BASE_URL/:organization/:repository/issues/:number

headers - headers: {
  Authorization: string
}

body - {
  "title": "title",
  "body": "body"
}
