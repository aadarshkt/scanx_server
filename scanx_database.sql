-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 17, 2024 at 04:24 AM
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
  `name` varchar(255) DEFAULT NULL,
  `roll_no` varchar(20) DEFAULT NULL,
  `email` varchar(25) DEFAULT NULL,
  `mobile_number` varchar(25) DEFAULT NULL,
  `room_no` varchar(20) DEFAULT NULL,
  `hostel` varchar(50) DEFAULT NULL,
  `entry_at` datetime DEFAULT NULL,
  `exit_at` datetime DEFAULT NULL,
  `status` int(10) DEFAULT NULL,
  `current_in` int(11) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Library`
--

INSERT INTO `Library` (`id`, `name`, `roll_no`, `email`, `mobile_number`, `room_no`, `hostel`, `entry_at`, `exit_at`, `status`, `current_in`, `description`) VALUES
(5, 'Aadarsh Kumar Tiwari', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper Hostel', '2023-09-29 21:31:24', '2023-10-15 15:09:45', 0, -1, NULL),
(6, 'Aadarsh Kumar Tiwari', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper Hostel', '2023-09-29 21:38:13', '2023-10-15 15:09:45', 0, -1, NULL),
(7, 'Aadarsh Kumar Tiwari', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper Hostel', '2023-09-29 21:40:54', '2023-10-15 15:09:45', 0, -1, NULL),
(8, 'Aadarsh Kumar Tiwari', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper Hostel', '2023-09-29 21:42:06', '2023-10-15 15:09:45', 0, -1, NULL),
(9, 'Aadarsh Kumar Tiwari', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper Hostel', '2023-09-29 23:06:11', '2023-10-15 15:09:45', 0, -1, NULL),
(10, 'Aadarsh Kumar Tiwari', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper Hostel', '2023-09-29 23:08:42', '2023-10-15 15:09:45', 0, -1, NULL),
(11, 'Aadarsh Kumar Tiwari', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper Hostel', '2023-09-29 23:10:02', '2023-10-15 15:09:45', 0, -1, NULL),
(12, 'Aadarsh Kumar Tiwari', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper Hostel', '2023-09-29 23:11:33', '2023-10-15 15:09:45', 0, -1, NULL),
(13, 'Aadarsh Kumar Tiwari', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper Hostel', '2023-09-29 23:12:54', '2023-10-15 15:09:45', 0, -1, NULL),
(14, 'Aadarsh Kumar Tiwari', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper Hostel', '2023-09-29 23:16:49', '2023-10-15 15:09:45', 0, -1, NULL),
(15, 'Aadarsh Kumar Tiwari', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper Hostel', '2023-09-29 23:17:32', '2023-10-15 15:09:45', 0, -1, NULL),
(16, 'AADARSH KUMAR TIWARI', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper', '2023-09-29 23:30:06', '2023-10-15 15:09:45', 0, -1, NULL),
(17, 'AADARSH KUMAR TIWARI', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper', '2023-09-29 23:32:28', '2023-10-15 15:09:45', 0, -1, NULL),
(18, 'AADARSH KUMAR TIWARI', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper', '2023-09-29 23:36:36', '2023-10-15 15:09:45', 0, -1, NULL),
(19, 'AADARSH KUMAR TIWARI', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper', '2023-09-29 23:40:09', '2023-10-15 15:09:45', 0, -1, NULL),
(20, 'AADARSH KUMAR TIWARI', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper', '2023-09-29 23:42:27', '2023-10-15 15:09:45', 0, -1, NULL),
(21, 'AADARSH KUMAR TIWARI', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper', '2023-09-29 23:44:55', '2023-10-15 15:09:45', 0, -1, NULL),
(22, 'AADARSH KUMAR TIWARI', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper', '2023-09-29 23:51:08', '2023-10-15 15:09:45', 0, -1, NULL),
(23, 'AADARSH KUMAR TIWARI', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper', '2023-09-29 23:51:08', '2023-10-15 15:09:45', 0, -1, NULL),
(24, 'AADARSH KUMAR TIWARI', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper', '2023-10-15 15:14:39', '2023-10-15 15:14:56', 0, -1, NULL),
(25, 'AADARSH KUMAR TIWARI', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper', '2023-10-15 15:16:26', '2023-10-15 15:16:39', 0, -1, NULL),
(26, 'AADARSH KUMAR TIWARI', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper', '2023-10-15 15:25:50', '2023-10-15 15:25:51', 0, -1, NULL),
(27, 'AADARSH KUMAR TIWARI', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper', '2023-10-15 15:26:26', '2023-10-15 15:26:26', 0, -1, NULL),
(28, 'AADARSH KUMAR TIWARI', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper', '2024-01-16 18:28:02', '2024-01-16 18:28:36', 0, -1, NULL),
(29, 'AADARSH KUMAR TIWARI', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper', '2024-01-16 18:29:09', '2024-01-16 18:31:34', 0, -1, NULL),
(30, 'AADARSH KUMAR TIWARI', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper', '2024-01-16 18:31:50', '2024-01-16 18:37:23', 0, -1, NULL),
(31, 'AADARSH KUMAR TIWARI', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper', '2024-01-16 18:42:48', '2024-01-16 18:43:24', 0, -1, NULL),
(32, 'AADARSH KUMAR TIWARI', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper', '2024-01-16 18:43:47', '2024-01-16 18:44:07', 0, -1, NULL),
(33, 'AADARSH KUMAR TIWARI', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper', '2024-01-16 18:52:51', '2024-01-16 18:53:31', 0, -1, NULL),
(34, 'AADARSH KUMAR TIWARI', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper', '2024-01-16 18:54:44', '2024-01-16 18:54:44', 0, -1, NULL),
(35, 'AADARSH KUMAR TIWARI', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper', '2024-01-16 18:54:45', NULL, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `SAC`
--

CREATE TABLE `SAC` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `roll_no` varchar(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `mobile_number` varchar(20) DEFAULT NULL,
  `room_no` varchar(20) DEFAULT NULL,
  `hostel` varchar(20) DEFAULT NULL,
  `entry_at` datetime DEFAULT NULL,
  `exit_at` datetime DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL COMMENT 'datatype must be boolean',
  `current_in` int(11) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `SAC`
--

INSERT INTO `SAC` (`id`, `name`, `roll_no`, `email`, `mobile_number`, `room_no`, `hostel`, `entry_at`, `exit_at`, `status`, `current_in`, `description`) VALUES
(1, 'Praneet Pandey', '123456', 'pp123@gmail.com', '1234567890', 'A101', 'ABC Hostel', '2023-11-08 15:28:07', '2023-11-14 15:28:07', 0, 1, 'New student'),
(2, 'Ravinder Malya', '20JE0002', 'rm234@gmail.com', '8318232564', 'C-422', 'Jasper', '2023-11-07 15:29:07', '2023-11-08 15:29:07', 0, 1, 'SAC'),
(49, 'Aman Tripathi', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper ', '2023-10-14 17:39:25', '2023-10-15 08:43:58', 0, 0, NULL),
(50, 'Rajesh Gondisetty', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper ', '2023-10-14 17:41:49', '2023-10-15 08:43:58', 0, 0, NULL),
(51, 'Ramesh lorisetty', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper ', '2023-10-14 17:43:01', '2023-10-15 08:43:58', 0, 0, NULL),
(52, 'Thakur Khanna', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper ', '2023-10-14 17:44:13', '2023-10-15 08:43:58', 0, 0, NULL),
(53, 'Pradesh Mahavir', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper ', '2023-10-15 08:38:47', '2023-10-15 08:43:58', 0, 0, NULL),
(54, 'Rakesh Murthy', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper ', '2023-10-15 08:39:05', '2023-10-15 08:43:58', 0, 0, NULL),
(55, 'Gignesh Chawla', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper ', '2023-10-15 08:42:22', '2023-10-15 08:43:58', 0, 0, NULL),
(56, 'Toni Singh', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper ', '2023-10-15 08:43:58', '2023-10-15 08:47:46', 0, 0, NULL),
(57, 'Mayank Raju', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper ', '2023-10-15 08:47:46', '2023-10-15 08:48:43', 0, 0, NULL),
(58, 'Rajveer Sinha', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper ', '2023-10-15 08:48:44', '2023-10-15 08:52:32', 0, 0, NULL),
(59, 'Ahmed Rashid Khan', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper ', '2023-10-15 08:52:33', '2023-10-15 08:55:25', 0, 0, NULL),
(60, 'Tinku Ojha', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper ', '2023-10-15 08:55:25', '2023-10-15 09:00:18', 0, 0, NULL),
(61, 'Ujjawal Joshi', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper ', '2023-10-15 09:00:18', '2023-10-15 09:03:02', 0, 0, NULL),
(62, 'Rakesh Junjhunwala', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper ', '2023-10-15 09:03:02', '2023-10-15 09:03:35', 0, 0, NULL),
(63, 'Prasanth Reddy', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper ', '2023-10-15 09:04:00', '2023-10-15 09:04:10', 0, 0, NULL),
(64, 'Karan Arjun', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', NULL, NULL, '2023-10-15 11:01:22', '2023-10-15 11:39:55', 0, 0, NULL),
(65, 'Shilpa Wangdu', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper', '2023-10-15 13:44:21', '2023-10-15 13:45:07', 0, 0, NULL),
(66, 'Chat Nayak', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper', '2023-10-15 13:47:25', '2023-10-15 15:07:52', 0, 0, NULL),
(67, 'Ravi Jadeja', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper', '2023-10-15 15:08:16', '2023-10-15 15:08:34', 0, 0, NULL),
(68, 'Prakash Narayan', '20JE0002', NULL, '8318232564', 'C-422', 'Jasper', NULL, NULL, 0, 1, 'SAC'),
(69, 'AADARSH KUMAR TIWARI', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper ', '2023-11-30 15:49:11', '2023-11-30 15:49:54', 0, 0, NULL),
(70, 'AADARSH KUMAR TIWARI', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper', '2023-11-30 16:04:19', '2023-11-30 16:04:41', 0, 0, NULL),
(71, 'AADARSH KUMAR TIWARI', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper', '2023-11-30 16:04:59', '2023-11-30 16:05:29', 0, 0, NULL),
(73, 'AADARSH KUMAR TIWARI', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper', '2024-01-16 18:19:58', '2024-01-16 18:20:56', 0, 0, NULL),
(74, 'AADARSH KUMAR TIWARI', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper', '2024-01-16 18:21:25', '2024-01-16 18:21:54', 0, 0, NULL),
(75, 'AADARSH KUMAR TIWARI', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper', '2024-01-16 18:24:03', '2024-01-16 18:24:19', 0, 0, NULL),
(76, 'AADARSH KUMAR TIWARI', '20JE0002', 'aadarshkt1729@gmail.com', '9755681498', 'C-422', 'Jasper', '2024-01-16 18:25:19', NULL, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `roll_number` varchar(50) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `last_location` varchar(50) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `total_library_time` int(50) DEFAULT NULL,
  `total_sac_time` int(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `mobile_number` varchar(25) DEFAULT NULL,
  `room_no` varchar(10) DEFAULT NULL,
  `hostel` varchar(10) DEFAULT NULL,
  `hashedpassword` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`, `roll_number`, `email`, `last_location`, `status`, `total_library_time`, `total_sac_time`, `created_at`, `mobile_number`, `room_no`, `hostel`, `hashedpassword`) VALUES
(42, 'AADARSH KUMAR TIWARI', '20JE0002', 'aadarshkt1729@gmail.com', 'Library', 1, 653910, 104226, '2024-01-16 12:37:12', '9755681498', 'C-422', 'Jasper', '$2b$10$9jakA.mU3U/pEG9qLWRPRO7Ohs.4hqGllgkxExokl4ZeRONUn4D96');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `SAC`
--
ALTER TABLE `SAC`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
