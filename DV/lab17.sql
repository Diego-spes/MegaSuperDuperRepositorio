CREATE TABLE `usuarios` (
  `username` varchar(40) COLLATE utf8_spanish2_ci NOT NULL,
  `password` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `nombre` varchar(400) COLLATE utf8_spanish2_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`username`);
