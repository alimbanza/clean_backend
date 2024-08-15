-- 

--
-- Base de données : `clean_app`
--

-- --------------------------------------------------------

--
-- Structure de la table `adresses`
--

CREATE TABLE `adresses` (
  `id` int(11) NOT NULL,
  `id_commune` int(11) DEFAULT NULL,
  `id_quartier` int(11) DEFAULT NULL,
  `avenue` varchar(255) DEFAULT NULL,
  `num_parcelle` varchar(255) DEFAULT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB;

--
-- Déchargement des données de la table `adresses`
--


-- --------------------------------------------------------

--
-- Structure de la table `affectation_zones`
--

CREATE TABLE `affectation_zones` (
  `id` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_zone` int(11) DEFAULT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB;

-- --------------------------------------------------------

--
-- Structure de la table `clients`
--


--
-- Déchargement des données de la table `clients`
--


-- --------------------------------------------------------

--
-- Structure de la table `collectes`
--

CREATE TABLE `collectes` (
  `id` int(11) NOT NULL,
  `ouverture` varchar(255) DEFAULT NULL,
  `fermeture` varchar(255) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB;

--
-- Déchargement des données de la table `collectes`
--

-- --------------------------------------------------------

--
-- Structure de la table `collecte_dechets`
--

CREATE TABLE `collecte_dechets` (
  `id` int(11) NOT NULL,
  `id_menage` varchar(255) DEFAULT NULL,
  `id_collecte` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB;

--
-- Déchargement des données de la table `collecte_dechets`
--


-- --------------------------------------------------------

--
-- Structure de la table `communes`
--

CREATE TABLE `communes` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB;

--
-- Déchargement des données de la table `communes`
--


-- --------------------------------------------------------

--
-- Structure de la table `demande_collectes`
--

CREATE TABLE `demande_collectes` (
  `id` int(11) NOT NULL,
  `id_zone` int(11) DEFAULT NULL,
  `id_menage` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB;

-- --------------------------------------------------------

--
-- Structure de la table `menages`
--

CREATE TABLE `menages` (
  `id` int(11) NOT NULL,
  `id_client` int(11) DEFAULT NULL,
  `id_zone` int(11) DEFAULT NULL,
  `coord_longitude` varchar(255) DEFAULT NULL,
  `coord_latitude` varchar(255) DEFAULT NULL,
  `id_adresse` int(11) DEFAULT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB;

--
-- Déchargement des données de la table `menages`
--

-- --------------------------------------------------------

--
-- Structure de la table `paiements`
--

CREATE TABLE `paiements` (
  `id` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `montant` varchar(255) DEFAULT NULL,
  `mois` varchar(255) DEFAULT NULL,
  `devise` varchar(255) DEFAULT NULL,
  `id_menage` int(11) NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB;

--
-- Déchargement des données de la table `paiements`
--


-- --------------------------------------------------------

--
-- Structure de la table `personnels`
--

CREATE TABLE `personnels` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `postnom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `lieu_de_naissance` varchar(255) DEFAULT NULL,
  `date_de_naissance` varchar(255) DEFAULT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `sexe` varchar(255) DEFAULT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB;

--
-- Déchargement des données de la table `personnels`
--

-- --------------------------------------------------------

--
-- Structure de la table `quartiers`
--

CREATE TABLE `quartiers` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `id_zone` int(11) DEFAULT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB;

--
-- Déchargement des données de la table `quartiers`
--

-- --------------------------------------------------------

--
-- Structure de la table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `sequelizemeta`
--


-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `personnel_id` int(11) DEFAULT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB;

--
-- Déchargement des données de la table `users`
--

-- --------------------------------------------------------

--
-- Structure de la table `zone_couvertures`
--

CREATE TABLE `zone_couvertures` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `coordonnees` varchar(255) DEFAULT NULL,
  `etat` varchar(255) DEFAULT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB;

--
-- Déchargement des données de la table `zone_couvertures`
--

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `adresses`
--
ALTER TABLE `adresses`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `affectation_zones`
--
ALTER TABLE `affectation_zones`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `clients`
--

--
-- Index pour la table `collectes`
--
ALTER TABLE `collectes`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `collecte_dechets`
--
ALTER TABLE `collecte_dechets`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `communes`
--
ALTER TABLE `communes`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `demande_collectes`
--
ALTER TABLE `demande_collectes`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `menages`
--
ALTER TABLE `menages`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `paiements`
--
ALTER TABLE `paiements`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `personnels`
--
ALTER TABLE `personnels`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `quartiers`
--
ALTER TABLE `quartiers`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `zone_couvertures`
--
ALTER TABLE `zone_couvertures`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `adresses`
--
ALTER TABLE `adresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT pour la table `affectation_zones`
--
ALTER TABLE `affectation_zones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT pour la table `collectes`
--
ALTER TABLE `collectes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `collecte_dechets`
--
ALTER TABLE `collecte_dechets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT pour la table `communes`
--
ALTER TABLE `communes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `demande_collectes`
--
ALTER TABLE `demande_collectes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `menages`
--
ALTER TABLE `menages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT pour la table `paiements`
--
ALTER TABLE `paiements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `personnels`
--
ALTER TABLE `personnels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `quartiers`
--
ALTER TABLE `quartiers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `zone_couvertures`
--
ALTER TABLE `zone_couvertures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

