-- CreateTable
CREATE TABLE `Pet` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `nomeDono` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `animal` VARCHAR(191) NOT NULL,
    `nascimento` VARCHAR(191) NOT NULL,
    `raca` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
