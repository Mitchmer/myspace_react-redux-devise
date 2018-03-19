class Api::PostsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_post, only: [:show, :update, :destroy]
  
  def index
    render json: Post.set_name
  end

  def show
    render json: @post
  end

  def create
    post = current_user.posts.create(post_params)
    if post.save
      render json: post
    else
      render json: { errors: post.errors.full_messages.join(',') }, status: 422
    end
  end

  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: { errors: @post.errors.full_messages.join(',') }, status: 422
    end
  end

  def destroy
    @post.destroy
  end

  private
    def set_post
      Post.set_name
      @post = Post.find(params[:id])
    end

    def post_params
      params.require(:post).permit(:author, :title, :body)
    end
end