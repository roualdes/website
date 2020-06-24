faces <- c("A", 2:10, "J", "Q", "K")
suits <- c("C", "D", "H", "S")
deck <- expand.grid(faces, suits)

M <- nrow(deck)
N <- 10000
x <- rep(NA, N) # pre-allocate vector

for ( n in 1:N ) {
  idx <- sample(M, 1)
  hand <- deck[idx, ]

  if ( hand[1] == "A" && hand[2] == "S" ) {
    x[n] <- 1
  } else {
    x[n] <- 0
  }
}

mean(x) # should be close to 1/52
