-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 27, 2023 at 12:48 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `scanx_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `Library`
--

CREATE TABLE `Library` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `roll_no` int(11) NOT NULL,
  `mobile_number` int(11) NOT NULL,
  `room_no` varchar(20) NOT NULL,
  `hostel` varchar(255) DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  `current_in` int(11) NOT NULL,
  `description` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Library`
--

INSERT INTO `Library` (`id`, `name`, `roll_no`, `mobile_number`, `room_no`, `hostel`, `status`, `current_in`, `description`) VALUES
(1, 'John Doe', 123456, 1234567890, 'A101', 'ABC Hostel', 1, 1, 'New student');

-- --------------------------------------------------------

--
-- Table structure for table `SAC`
--

CREATE TABLE `SAC` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `roll_no` int(11) NOT NULL,
  `mobile_number` int(11) NOT NULL,
  `room_no` varchar(20) NOT NULL,
  `hostel` varchar(20) NOT NULL,
  `status` tinyint(1) NOT NULL COMMENT 'datatype must be boolean',
  `current_in` int(11) NOT NULL,
  `description` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `SAC`
--

INSERT INTO `SAC` (`id`, `name`, `roll_no`, `mobile_number`, `room_no`, `hostel`, `status`, `current_in`, `description`) VALUES
(1, 'John Doe', 123456, 1234567890, 'A101', 'ABC Hostel', 1, 1, 'New student');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `roll_number` varchar(50) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `last_location` varchar(50) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `total_library_time` timestamp NULL DEFAULT NULL,
  `total_sac_time` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`, `roll_number`, `email`, `last_location`, `status`, `total_library_time`, `total_sac_time`, `created_at`) VALUES
(1, 'John Doe', '123456', 'john@example.com', 'Library', 1, '2023-06-20 14:30:00', '2023-06-20 14:30:00', '2023-06-20 12:49:18'),
(2, 'John', '123456', 'john@example.com', 'Library', 1, '2023-06-20 14:30:00', '2023-06-20 14:30:00', '2023-06-20 12:56:29'),
(3, 'Joh', '123456', 'john@example.com', 'Library', 1, '2023-06-20 14:30:00', '2023-06-20 14:30:00', '2023-06-20 12:59:48'),
(4, 'Joh', '123456', 'john@example.com', 'Library', 1, '2023-06-20 09:00:00', '2023-06-20 09:00:00', '2023-06-21 04:51:16'),
(5, 'Jo', '123456', 'john@example.com', 'Library', 1, '2023-06-20 09:00:00', '2023-06-20 09:00:00', '2023-06-21 04:51:51'),
(6, 'AADARSH KUMAR TIWARI', '1', 'aadarshkt1729@gmail.com', 'Lib', -1, '2023-06-20 14:30:00', '2023-06-20 14:30:00', '2023-06-22 12:41:15'),
(7, 'AADARSH KUMAR TIWARI', '20JE0002', 'aadarshkt1729@gmail.com', 'Lib', -1, '2023-06-20 14:30:00', '2023-06-20 14:30:00', '2023-06-22 12:43:05'),
(8, 'AADARSH KUMAR TIWARI', '20JE0002', 'aadarshkt1729@gmail.com', 'Lib', -1, '2023-06-20 14:30:00', '2023-06-20 14:30:00', '2023-06-22 12:48:51'),
(9, 'AADARSH', '20JE0002', 'aadarshkt1729@gmail.com', 'Lib', -1, '2023-06-20 14:30:00', '2023-06-20 14:30:00', '2023-06-22 13:09:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Library`
--
ALTER TABLE `Library`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `SAC`
--
ALTER TABLE `SAC`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Library`
--
ALTER TABLE `Library`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `SAC`
--
ALTER TABLE `SAC`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
