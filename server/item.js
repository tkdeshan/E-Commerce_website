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
      image: '/images/arduino_uno.jpg', 
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
    {
        name: 'Arduino Nano',
        slug: 'Arduino Nano',
        category: 'Arduino',
        image: '/images/arduino_nano.jpg', 
        price: 1950,
        countInStock: 5,
        rating: 3,
        numReviews: 14,
        description: 'Features:\
        20 digital input/output port RX and TX, D2 ~ D13, A0 ~ A5\
        8 analog input port A0 ~ A7\
        1 to the TTL level a serial port to send and receive port RX/TX\
        6 PWM port, D3, D5, D6, D9, D10, D11\
        Using Atmel Atmega168P-AU microcontroller\
        Support serial download and ISP download\
        Support external 3.3V ~ 12V dc power supply\
        Support the Li-ion polymer batteries while direct connect Vcc Pin\
        16 MHZ clock frequency',
      },
      {
        name: 'Ultrasonic Sensor',
        slug: 'Ultrasonic Sensor',
        category: 'Arduino',
        image: '/images/us_sensor.jpg', 
        price: 400,
        countInStock: 10,
        rating: 4,
        numReviews: 40,
        description: 'Specifications:\
        Operating voltage: +5V\
        Theoretical Measuring Distance: 2cm to 450cm\
        Practical Measuring Distance: 2cm to 80cm\
        Accuracy: 3mm\
        Measuring angle covered: <15>\
        Operating Current: <15mA>\
        Operating Frequency: 40Hz',
      },
      {
        name: 'PIR Sensor',
        slug: 'PIR Sensor',
        category: 'Arduino',
        image: '/images/pir_sensor.jpg', 
        price: 30 ,
        countInStock: 2,
        rating: 5,
        numReviews: 10,
        description: 'HC-SR501 is based on infrared technology, automatic control module, using Germany imported LHI778 probe design, high sensitivity, high reliability, ultra-low-voltage operating mode, widely used in various auto-sensing electrical equipment, especially for battery-powered automatic controlled products.',
      },
      {
        name: 'NodeMCU',
        slug: 'NodeMCU',
        category: 'Arduino',
        image: '/images/nodemcu.jpg', 
        price: 1650,
        countInStock: 4,
        rating: 3,
        numReviews: 45,
        description: 'This is the NodeMCU development board based on ESP32, features WiFi+Bluetooth connectivity, onboard CP2102 and keys. What is more, all the I/O pins of ESP32 module are accessible via the extension headers.',
      },
      {
        name: 'HC-05 Bluetooth Module',
        slug: 'HC-05 Bluetooth Module',
        category: 'Arduino',
        image: '/images/bluetooth.jpg', 
        price: 1100,
        countInStock: 6,
        rating: 3,
        numReviews: 21,
        description: 'HC-05 Bluetooth Module is an easy to use Bluetooth SPP (Serial Port Protocol) module, designed for transparent wireless serial connection setup. Its communication is via serial communication which makes an easy way to interface with controller or PC. HC-05 Bluetooth module provides switching mode between master and slave mode which means it able to use neither receiving nor transmitting data. ',
      },
      {
        name: 'Servo Motor',
        slug: 'Servo Motor',
        category: 'Arduino',
        image: '/images/servo_motor.jpg', 
        price: 380,
        countInStock: 2,
        rating: 4.5,
        numReviews: 12,
        description: 'The SG90 digital micro servo is the most popular 9g servo in the world. This SG90 version can rotate 360 degrees continuously. This makes it ideal for use in a robot project.',
      },
      {
        name: 'Magicbit',
        slug: 'Magicbit',
        category: 'Arduino',
        image: '/images/magicbit.jpg', 
        price: 8880,
        countInStock: 2,
        rating: 4.5,
        numReviews: 12,
        description: 'An Integrated development platform for learning, prototyping in IoT, robotics, coding, electronics and solution designing',
      },
      {
        name: 'Quadcopter Mini Frame Kit',
        slug: 'Quadcopter Mini Frame Kit',
        category: 'Arduino',
        image: '/images/quadcopter.jpg', 
        price: 2200,
        countInStock: 1,
        rating: 2,
        numReviews: 12,
        description: 'Specifications:\
        Quadcopter Mini Frame Kit Chassis\
        material: Plastic\
        wheelbase: 100mm\
        thickness: 3mm\
        Motor diameter: 8.5mm\
        Prop Size: 65mm\
        Color:  yellow and black\
        bare weight: 11.6g (Motor not included)\
        size: 83x83x35mm (LxWxH)',
      },
      {
        name: 'Line Following Smart Car Kit',
        slug: 'Line Following Smart Car Kit',
        category: 'Arduino',
        image: '/images/car.jpg', 
        price: 2600,
        countInStock: 2,
        rating: 3.5,
        numReviews: 12,
        description: 'The chip LM393 is comparing the sizes of the two photosensitive resistors at any time. When there is an imbalance (for example, one side of the black runway), the motor is stopped immediately, and the other side of the motor is rotated to make the car correct and return to the correct direction. The whole process is a closed-loop control, so it can be controlled quickly and sensitively.',
      },
  ],
};
export default item;
