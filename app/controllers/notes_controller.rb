class NotesController < ApplicationController
  before_action :set_note, only: [:show, :edit, :update, :destroy]

  def index
    render inertia: 'Notes/Index', props: { 
      notes: Note.order(:created_at).as_json(
        only: [ :id, :title, :body ]
      )
    }
  end

  def show
    render inertia: 'Notes/Show', props: { 
      note: @note.as_json( only: [ :id, :title, :body ] ) 
    }
  end

  def new
    render inertia: 'Notes/New'
  end

  def edit
    render inertia: 'Notes/Edit', props: { 
      note: @note.as_json( only: [ :id, :title, :body ] ) 
    }
  end

  def create
    Note.create params.require(:note).permit(:title, :body)

    redirect_to notes_path
  end

  def update
    respond_to do |format|
      if @note.update(note_params)
        format.html { redirect_to @note, notice: 'Note was successfully updated.' }
        format.json { render :show, status: :ok, location: @note }
      else
        format.html { render :edit }
        format.json { render json: @note.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @note.destroy
    respond_to do |format|
      format.html { redirect_to notes_url, notice: 'Note was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def set_note
      @note = Note.find(params[:id])
    end

    def note_params
      params.require(:note).permit(:title, :body)
    end
end
