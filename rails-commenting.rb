# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) Setting up input relation between BlogPostControlloer and ApplicationController
class BlogPostsController < ApplicationController
  def index
    # ---2)Sets up an instance variable on the index method to hold all current data.
    @posts = BlogPost.all
  end

  # ---3)Creating a method that calls @post to call on a single data value most likely with the primary id since params is being present. 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) New method that renders a new entry 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Passing params under the create method to set up a pathway for the if else conditional on the new @post instance variable if valid new data is inserted into the database if not redirects you to try again 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) Under the edit method the targeted id is being rendered for and update action. 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)Updating the actual database record
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)If the destroy method wasnt valid redirects back to the targeted id to try again. 
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Setting a "safety barrier" so that users do not have acces 
  private
  def blog_post_params
    # ---10)Sets up the required params for creating new data
    params.require(:blog_post).permit(:title, :content)
  end
end
