class Api::V1::GreetingsController < ApplicationController
    def index
      @greetings = Greeting.all
      respond_to do |format|
        format.json { render json: @greetings }
        format.html { render json: @greetings }
      end
    end
  
    def random_greeting
      random_number = rand(Greeting.count)
      @greeting = Greeting.all[random_number]
      respond_to do |format|
        format.json { render json: @greeting }
        format.html { render json: @greeting }
      end
    end
  end
  