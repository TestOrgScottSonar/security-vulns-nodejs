var config = require("../config"),
    pgp = require('pg-promise')();

/**
 * WARNING: This file contains intentional SQL injection vulnerabilities
 * for demonstration purposes with GitHub Advanced Security.
 * DO NOT use these patterns in production code!
 */

// SQL Injection via string concatenation
function searchUsers(searchTerm) {
    var db = pgp(config.db.connectionString);
    // VULNERABLE: Direct string concatenation
    var q = "SELECT * FROM users WHERE name LIKE '%" + searchTerm + "%'";
    return db.any(q);
}

// SQL Injection via template literals
function getUserById(userId) {
    var db = pgp(config.db.connectionString);
    // VULNERABLE: Template literal injection
    var q = `SELECT * FROM users WHERE id = ${userId}`;
    return db.one(q);
}

// SQL Injection in ORDER BY clause
function getProductsSorted(sortColumn, sortOrder) {
    var db = pgp(config.db.connectionString);
    // VULNERABLE: Dynamic ORDER BY with user input
    var q = "SELECT * FROM products ORDER BY " + sortColumn + " " + sortOrder;
    return db.any(q);
}

// SQL Injection in WHERE clause with multiple parameters
function findProducts(category, minPrice, maxPrice) {
    var db = pgp(config.db.connectionString);
    // VULNERABLE: Multiple concatenated user inputs
    var q = "SELECT * FROM products WHERE category = '" + category + 
            "' AND price >= " + minPrice + " AND price <= " + maxPrice;
    return db.any(q);
}

// SQL Injection via dynamic table name
function getDataFromTable(tableName, condition) {
    var db = pgp(config.db.connectionString);
    // VULNERABLE: Dynamic table name
    var q = "SELECT * FROM " + tableName + " WHERE status = '" + condition + "'";
    return db.any(q);
}

// SQL Injection in LIKE pattern
function searchProductDescription(keyword) {
    var db = pgp(config.db.connectionString);
    // VULNERABLE: LIKE clause injection
    var query = "SELECT * FROM products WHERE description LIKE '%" + keyword + "%' OR name LIKE '%" + keyword + "%'";
    return db.any(query);
}

// SQL Injection in UPDATE statement
function updateUserEmail(userId, newEmail) {
    var db = pgp(config.db.connectionString);
    // VULNERABLE: UPDATE with string concatenation
    var q = "UPDATE users SET email = '" + newEmail + "' WHERE id = " + userId;
    return db.none(q);
}

// SQL Injection in DELETE statement
function deleteUser(username) {
    var db = pgp(config.db.connectionString);
    // VULNERABLE: DELETE with user input
    var q = "DELETE FROM users WHERE name = '" + username + "'";
    return db.none(q);
}

// SQL Injection with complex WHERE clause
function advancedSearch(filters) {
    var db = pgp(config.db.connectionString);
    // VULNERABLE: Building complex WHERE clause with string concatenation
    var whereClause = "1=1";
    if (filters.name) {
        whereClause += " AND name = '" + filters.name + "'";
    }
    if (filters.email) {
        whereClause += " AND email = '" + filters.email + "'";
    }
    if (filters.role) {
        whereClause += " AND role = '" + filters.role + "'";
    }
    var q = "SELECT * FROM users WHERE " + whereClause;
    return db.any(q);
}

// SQL Injection in LIMIT/OFFSET clause
function getPaginatedResults(pageSize, offset) {
    var db = pgp(config.db.connectionString);
    // VULNERABLE: Dynamic LIMIT/OFFSET
    var q = "SELECT * FROM products LIMIT " + pageSize + " OFFSET " + offset;
    return db.any(q);
}

// SQL Injection with IN clause
function getUsersByIds(idList) {
    var db = pgp(config.db.connectionString);
    // VULNERABLE: IN clause with string concatenation
    var q = "SELECT * FROM users WHERE id IN (" + idList + ")";
    return db.any(q);
}

// SQL Injection in JOIN condition
function getOrdersWithUserInfo(status) {
    var db = pgp(config.db.connectionString);
    // VULNERABLE: Dynamic JOIN condition
    var q = "SELECT o.*, u.name FROM orders o JOIN users u ON o.user_id = u.id WHERE o.status = '" + status + "'";
    return db.any(q);
}

// SQL Injection using ES6 template literals with expression
function searchByMultipleFields(searchValue, fieldName) {
    var db = pgp(config.db.connectionString);
    // VULNERABLE: Template literal with multiple injections
    var q = `SELECT * FROM products WHERE ${fieldName} LIKE '%${searchValue}%'`;
    return db.any(q);
}

module.exports = {
    searchUsers,
    getUserById,
    getProductsSorted,
    findProducts,
    getDataFromTable,
    searchProductDescription,
    updateUserEmail,
    deleteUser,
    advancedSearch,
    getPaginatedResults,
    getUsersByIds,
    getOrdersWithUserInfo,
    searchByMultipleFields
};
