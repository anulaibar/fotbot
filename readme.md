# Fotbot

> A web app that chucks out teams of fotbots!

## Requirements

    Ruby 2.0.0
    Bundler
    PostgreSQL

## DB setup

    brew install postgres
    initdb /usr/local/var/postgres
    pg_ctl -D /usr/local/var/postgres start
    createuser -s -r fotbot

## Environment variables

    export ROBOHASH_API_KEY=<your_api_key>

## Running specs

    bundle exec rspec

## Demo

[Try it!](http://fotbot.herokuapp.com)
