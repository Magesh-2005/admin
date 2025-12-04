# ------ Build Stage ------
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app

# Copy backend project files
COPY . .

# Build Spring Boot JAR
RUN mvn clean package -DskipTests

# ------ Run Stage ------
FROM eclipse-temurin:17-jdk
WORKDIR /app

# Copy built jar from the build stage
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

# Start the Spring Boot app
ENTRYPOINT ["java", "-jar", "app.jar"]
