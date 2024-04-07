module Authors
  class PostsController < AuthorsController
    before_action :set_authors_post, only: %i[ show edit update destroy ]

    # GET /authors/posts
    def index
      @authors_posts = Authors::Post.all
    end

    # GET /authors/posts/1
    def show
    end

    # GET /authors/posts/new
    def new
      @authors_post = @author.posts.build
    end

    # GET /authors/posts/1/edit
    def edit
    end

    # POST /authors/posts
    def create
      @authors_post = @author.posts.build(authors_post_params)

      if @authors_post.save
        redirect_to @authors_post, notice: "Post was successfully created."
      else
        render :new, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /authors/posts/1
    def update
      if @authors_post.update(authors_post_params)
        redirect_to @authors_post, notice: "Post was successfully updated.", status: :see_other
      else
        render :edit, status: :unprocessable_entity
      end
    end

    # DELETE /authors/posts/1
    def destroy
      @authors_post.destroy!
      redirect_to authors_posts_url, notice: "Post was successfully destroyed.", status: :see_other
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_authors_post
        @authors_post = Authors::Post.friendly.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def authors_post_params
        params.require(:authors_post).permit(:title, :description, :published_at, :published, :author_id)
      end
  end
end