const directionLine = (timer, line) => {
  setTimeout(() => process.stdout.write(line), timer);
};

directionLine(100, '\r|   ');

directionLine(300, '\r/   ');

directionLine(500, '\r-   ');

directionLine(700, '\r\\   ');

directionLine(900, '\r|   ');

directionLine(1100, '\r/   ');

directionLine(1300, '\r-   ');

directionLine(1500, '\r\\   ');

directionLine(1700, '\r|   ');
