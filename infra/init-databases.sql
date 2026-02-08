-- =====================================================
-- ELAND Platform - Database Initialization
-- Микросервис бүрд тусдаа DB үүсгэх
-- =====================================================

CREATE DATABASE eland_property;
CREATE DATABASE eland_auction;
CREATE DATABASE eland_contract;
CREATE DATABASE eland_payment;
CREATE DATABASE eland_notification;

-- PostGIS extension (property DB-д)
\c eland_property;
CREATE EXTENSION IF NOT EXISTS postgis;

-- Auth DB дээр PostGIS шаардлагагүй
\c eland_auth;
