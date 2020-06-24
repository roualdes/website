# assignment
x <- 2
class(x)
z <- x + 3

# vector
x <- c(1, 2, 3.4, 6, 5+4, 432)
x[1]

# matrix
A <- matrix(x, nrow=2)
A[2, 1]
A + 1 # vectorized addition

# control flow
if ( 2 == 1 ) {
  print("Hye")
} else {
  print("nay")
}

# for loop
for (i in x) {
  j <- i + 5
  print(j)
}

# funciton
foo <- function(x, y = 3.14) {
  z <- x + y * 2
  z
}

# loading libraries
library(tidyverse)
