import bcrypt from 'bcryptjs';

const item = {
  users: [
    {
      name: 'Kavinda',
      email: 'kavinda@gmail.com',
      password: bcrypt.hashSync('kavinda@123'),
      isAdmin: false,
    },
    {
        name: 'Shammi',
        email: 'shammi@gmail.com',
        password: bcrypt.hashSync('shammi@123'),
        isAdmin: false,
      },
  ],

  products: [
    {
      name: 'Arduino UNO',
      slug: 'Arduino UNO',
      category: 'Arduino',
      image: '/images/s1.jpg', 
      price: 2950,
      countInStock: 2,
      rating: 5,
      numReviews: 10,
      description: 'Arduino UNO R3 SMD is the open source Embedded Development board launched by Arduino based on Atmega328 SMD Package Microcontroller. Because Atmel is moving more and more of their production capacity to surface mount ICs, the DIP packaged ATmega is becoming more and more difficult to get. To keep up with demand, we now offer the Arduino Uno R3 with an SMD ATmega. The board is identical to the PTH version of the Uno, but you will not be able to remove the ATmega without some hot-air. This change should not affect most users \
      Specifications\
      Microcontroller: ATmega328 SMD\
      Operating Voltage: 5V Supply Voltage recommended : 7-9VDC\
      Digital I/O Pins: 14 (of which 6 provide PWM output)\
      Analog Input Pins: 6\
      DC Current per I/O Pin: 40 mA\
      DC Current for 3.3V Pin: 50 mA\
      Flash Memory: 32 KB (ATmega328) of which 0.5 KB used by bootloader\
      SRAM: 2 KB (ATmega328)\
      EEPROM: 1 KB (ATmega328)\
      Clock Speed: 16 MHz.',
    },
  ],
};
export default item;
