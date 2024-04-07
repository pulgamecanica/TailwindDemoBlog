class AuthorsController < ApplicationController
  layout 'author'
  
  before_action :authenticate_author!, :set_author

  def control_panel
  end

  def profile
  end

  def settings
  end

  protected
    def set_author
      @author = current_author
    end
end
